import React from "react";
import Typography from '@material-ui/core/Typography';
import {styles} from "../../common/styles";
import {ItemTeamPage} from "./ItemTeamPage";
import {Footer} from "./Footer";

export function TeamPage(props) {

  const {title, variant, dataTeamMembers, color} = props;
  const commonStyles = styles();

  const addItemTeamMembers = (item) => {
    return (
      <ItemTeamPage
        photo={item.photo}
        name={item.name}
        gitHub={item.gitHub}
        about={item.about}
      />
    )
  }

  const teamWrapper = `${commonStyles.pageWrapper} ${commonStyles.flexWrapper}`;

  return (
    <div className={teamWrapper}>
      <Typography variant={variant} color={color}>{title}</Typography>
      <div className={commonStyles.flexWrapperRow}>
        {dataTeamMembers.map((item) => addItemTeamMembers(item))}
      </div>
      <Footer/>
    </div>
  )
}