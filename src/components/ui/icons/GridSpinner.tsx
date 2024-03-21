import dynamic from "next/dynamic";

const GridLoader = dynamic(
	()=> import('react-spinners').then(lib => lib.GridLoader),
	{
		ssr: false,
	}
);

type Props = {
	color?:string;
}

export default function GridSpineer({color = 'red'}:Props) {
	return(
		<GridLoader color={color} />
	)
}