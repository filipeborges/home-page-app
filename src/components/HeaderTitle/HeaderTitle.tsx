import React from 'react';

type Header = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface HeaderTitleProps {
  type: Header
}

function buildHeader(type: Header, children: React.ReactNode) {
  switch (type) {
    case 'h1': return <h1>{children}</h1>;
    case 'h2': return <h2>{children}</h2>;
    case 'h3': return <h3>{children}</h3>;
    case 'h4': return <h4>{children}</h4>;
    case 'h5': return <h5>{children}</h5>;
    default: return <h1>{children}</h1>;
  }
}

const HeaderTitle: React.FC<HeaderTitleProps> = (props) => {
  return <React.Fragment>{buildHeader(props.type, props.children)}</React.Fragment>;
}

export default HeaderTitle;