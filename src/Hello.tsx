import * as React from "react";


interface Props {
  name: string;
}
const Hello: React.FC<Props> = (props) =>{
  return <h1>{props.name}!</h1>
}
export default Hello ;
