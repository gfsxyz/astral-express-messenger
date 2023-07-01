import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "@/actions/getConversations";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const conversation = await getConversations();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversation} />
        {children}
      </div>
    </Sidebar>
  );
};
export default layout;
