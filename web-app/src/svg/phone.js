import * as React from "react"
const Phone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={20}
    height={20}
    viewBox="0 0 72 90"
    {...props}
  >
    <path d="M48 70H24c-5.5 0-10-4.5-10-10V12c0-5.5 4.5-10 10-10h24c5.5 0 10 4.5 10 10v48c0 5.5-4.5 10-10 10zM24 6c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h24c3.3 0 6-2.7 6-6V12c0-3.3-2.7-6-6-6H24z" />
    <path d="M40 14h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8c1.1 0 2 .9 2 2s-.9 2-2 2z" />
    <circle cx={36} cy={56.4} r={4} />
  </svg>
)
export default Phone;
