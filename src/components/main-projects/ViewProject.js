// View project and github component

import React from "react";
import { useTranslation } from "react-i18next";

export const ViewProject = ({ projectLink, githubLink }) => {
  const showGithub = (link) => {
    if (link) {
      return (
        <a href={githubLink} rel="noopener noreferrer nofollow" target="_blank">
          Github
        </a>
      );
    }
  };

  const { t } = useTranslation();
  return (
    <div className="listprojects__card__content__buttons">
      <a href={projectLink} rel="noopener noreferrer nofollow" target="_blank">
        {t("projects.view")}
      </a>
      {showGithub(githubLink)}
    </div>
  );
};
