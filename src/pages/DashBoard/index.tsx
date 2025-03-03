import { useCookies } from 'react-cookie';

function DashBoard() {
    const [cookies] = useCookies(['AuthToken']);

    return (
        <>
            <h1>Dash board</h1>
            {JSON.stringify(cookies)}
        </>
    )
}

export default DashBoard;