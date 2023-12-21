import { Container, Form, Avatar } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
    return (
        <Container>
            <header>
                <ButtonText>
                    <FiArrowLeft />
                    Voltar
                </ButtonText>
            </header>
            <Form>
                <Avatar> <img src="https://github.com/victorlopescc.png" alt="Foto de usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha atual" type="password" icon={FiLock} />
                <Input placeholder="Nova Senha" type="password" icon={FiLock} />
                <Button title="Salvar" />
            </Form>
        </Container >
    );
}