import React from "react";
import { VscBell, VscBookmark, VscCommentDiscussion, VscFeedback } from "react-icons/vsc";

import NavTooltips from "./NavTooltips";

export default function ButtonsNav() {
  return (
    <div>
      <div>
        <ul className="flex flex-row gap-2">
          <li>
            <NavTooltips name={"Mensagens"} icon={<VscCommentDiscussion />} />
          </li>
          <li>
            <NavTooltips name={"Notificações"} icon={<VscBell />} />
          </li>
          <li>
            <NavTooltips name={"Feedback"} icon={<VscFeedback />} />
          </li>
          <li>
            <NavTooltips name={"Salvos"} icon={<VscBookmark />} />
          </li>
        </ul>
      </div>
    </div>
  );
}
