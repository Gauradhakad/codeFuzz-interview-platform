import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";

const useMeetingActions = () => {
  const router = useRouter();
  const client = useStreamVideoClient();

  const createInstantMeeting = async () => {
    if (!client) {
     console.log("Stream Video client is not initialized.");
      return;
    }

    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      console.log("Creating call with ID:", id);

      if (!client) {
       console.log("Stream Video client is not initialized.");
        return;
      }
      console.log("Stream Video Client:", client);
      await call.getOrCreate({
        data: { custom: { description: "Instant Meeting" } },
      });


      console.log("Call created successfully:", call.id);

      router.push(`/meeting/${call.id}`);
      
    } catch (error) {
      console.error("Failed to create meeting:", error);
      
    }
  };

  const joinMeeting = (callId: string) => {
    if (!client) {
     console.log("Stream Video client is not initialized.");
      return;
    }
    router.push(`/meeting/${callId}`);
  };

  return { createInstantMeeting, joinMeeting };
};

export default useMeetingActions;
