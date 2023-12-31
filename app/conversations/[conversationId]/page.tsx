import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessages";
import EmptyState from "@/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="h-full lg:pl-80">
        <div className="flex flex-col h-full">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full lg:pl-80">
      <div className="flex flex-col w-[93%] h-[90%] mt-10">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;
