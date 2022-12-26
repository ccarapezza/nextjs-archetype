export default function UserInformation({ data }: {data: any}) {
console.log("Loading user-information.js");
return <pre>{data&&JSON.stringify(data, null, 2)}</pre>;
}