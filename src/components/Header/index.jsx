import { Container, Brand, Search, Profile, Logout } from './styles';

export function Header({ children }) {
    return (
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>
            <Search>{children}</Search>
            <Profile to="/profile">
                <div>
                    <strong>Victor Lopes</strong>
                </div>
                <img src="https://github.com/victorlopescc.png" alt="Foto de usuário" />
            </Profile>
            <Logout>sair</Logout>
        </Container>
    );
}