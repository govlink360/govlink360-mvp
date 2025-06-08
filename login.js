export default function Login() {
  return (
    <main style={{ fontFamily: 'Arial', textAlign: 'center', padding: '40px' }}>
      <h1>Iniciar Sesión</h1>
      <form>
        <input type="email" placeholder="Correo electrónico" /><br /><br />
        <input type="password" placeholder="Contraseña" /><br /><br />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
