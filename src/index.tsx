import { Action, ActionPanel, launchCommand, LaunchType, List } from "@raycast/api";

export default function Command() {
  return (
    <List navigationTitle="Open Pull Requests">
      <List.Item
        title="Call another no-view command"
        actions={
          <ActionPanel title="Try to run">
            <Action
              title="Call another no-view command"
              onAction={() => launchCommand({ name: "index2", type: LaunchType.UserInitiated })}
            />
          </ActionPanel>
        }
      />
    </List>
  );
}
