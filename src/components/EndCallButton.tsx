import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import React from "react";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const updateInterviewStatus = useMutation(
    api.interview.updateInterviewStatus
  );

  const interview = useQuery(api.interview.getMyInterviewsByStreamCallId, {
    streamCallId: call?.id || "",
  });

  if(!call || !interview) return null;

  const isMeetingOwner = localParticipant?.userId === call.state.createdBy?.id

  if(!isMeetingOwner) return null
  const endCall = async() =>{
    try {
        await call.endCall();
        await updateInterviewStatus({id:interview._id,status:"completed"})

        router.push("/")
    } catch (error) {
        console.log(error)
    }
  }

  return <Button variant={"destructive"} onClick={endCall}>EndMeeting</Button>;
};

export default EndCallButton;
