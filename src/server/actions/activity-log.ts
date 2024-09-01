import { url } from "@/lib/url";
import { type ActivityWithLogs, addActivityLog } from "@/repositories/activity";
import { revalidatePath } from "next/cache";

export const addLog = (activity: ActivityWithLogs) => async () => {
  "use server";
  await addActivityLog(activity.id);
  revalidatePath(url.activity(activity.id));
  revalidatePath(url.root);
};
