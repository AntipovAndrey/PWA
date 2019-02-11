import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import GitHub from "./ui/GitHub";

const GitHubLink = () => {
  return (
    <>
      <IconButton href="https://github.com/AntipovAndrey" color="inherit">
        <GitHub/>
      </IconButton>
    </>
  );
};

export default GitHubLink;