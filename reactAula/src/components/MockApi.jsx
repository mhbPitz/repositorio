export default function MockApi ({perfil}) {
    if(!perfil) {
        return <p>Carregando perfil da MockAPI...</p>
    } 

    return (
        <div>
          <h1>{perfil.nome}</h1>
        </div>
    )
}