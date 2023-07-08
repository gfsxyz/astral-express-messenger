import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/actions/getConversations";
import getUsers from "@/actions/getUsers";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const conversation = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversation} users={users} />
        {children}
      </div>
    </Sidebar>
  );
};
export default layout;
