import Link from "next/link";

export default function navBar() {
    return (
        <header className="flex justify-between items-center bg-gray-500 px-28 py-3">
            <h1 className="fond-bold text-3xl text-white">Barra de navegacion</h1>

            <nav >
                <ul className="flex items-center py-5 px-2 text-white fond.bold rounded-sm aling-flex mx-2px ">
                    <li className="hover:bg-blue-500 m-2" >
                        <Link href="/" >Pagina inicial</Link>
                    </li>
                    <li className="hover:bg-blue-500 m-2">
                        <Link href="./saludo" >saludo</Link>

                    </li>
                    <li className="hover:bg-blue-500">
                        <Link href="./formulario" >formulario</Link>
                    </li>

                </ul>
            </nav>
        </header>




    )
}