export default function Page({ data }: {data: any}) {
console.log("Hello from user-information.js");
return <pre>{JSON.stringify(data, null, 2)}</pre>;
}