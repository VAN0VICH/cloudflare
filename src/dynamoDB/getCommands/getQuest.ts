import {
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  ScanCommandInput,
} from "@aws-sdk/lib-dynamodb";
import { Quest } from "../../generated/graphql";
interface GetQuestProps {
  questId: string;
  userId: string;
}
export const getQuest = async (
  props: GetQuestProps,
  client: DynamoDBDocumentClient,
  TableName: string
) => {
  const { userId, questId } = props;
  // Set the parameters.
  const params: GetCommandInput = {
    TableName,

    Key: { PK: `USER#${userId}`, SK: `#QUEST#${questId}` },
  };

  const result = await client.send(new GetCommand(params));
  console.log("result", result.Item);

  if (result.Item) {
    // Return the retrieved item
    const quest = result.Item as Quest;
    return quest;
  } else {
    return null;
  }
};
