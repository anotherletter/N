import React from "react";
import styled from "styled-components";
import AddIcon from "@atlaskit/icon/glyph/add";
import ListIcon from "@atlaskit/icon/glyph/list";
import Button, { ButtonGroup } from "@atlaskit/button";
import {
  updateSelectionAndCreateNewDoc,
  updateSelectionAndSwitchToList
} from "../actions";

const TitleBarWrapper = styled.div`
  height: 26px;
  padding: 0 12px 12px 52px;
  display: flex;
  align-items: center;
  -webkit-app-region: drag;
`;

const Center = styled.div`flex-grow: 1;`;

export default function TitleBar({ onAction, editorActions }) {
  return (
    <TitleBarWrapper>
      <Center />
      <ButtonGroup>
        <Button
          appearance="subtle-link"
          spacing="none"
          iconBefore={<AddIcon size="small" label="some label" />}
          onClick={() =>
            onAction(
              updateSelectionAndCreateNewDoc(
                editorActions._privateGetEditorView().state.selection.toJSON()
              )
            )}
        />
        <Button
          appearance="subtle-link"
          spacing="none"
          iconBefore={<ListIcon size="small" label="some label" />}
          onClick={() =>
            onAction(
              updateSelectionAndSwitchToList(
                editorActions._privateGetEditorView().state.selection.toJSON()
              )
            )}
        />
      </ButtonGroup>
    </TitleBarWrapper>
  );
}
