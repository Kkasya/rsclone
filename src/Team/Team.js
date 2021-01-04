import React from "react";
import {TeamPage} from './TeamPage'
import {dataTeamMembers} from "../common";

export function Team() {
  return (
    <div>
      <TeamPage
        title='Team members'
        variant="h2"
        color="secondary"
        dataTeamMembers={dataTeamMembers}
      />
    </div>
  )
}