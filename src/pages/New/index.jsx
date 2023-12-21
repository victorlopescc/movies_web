import { FiArrowLeft } from "react-icons/fi";
import { Container, Form } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function New() {
    return (
        <Container>
            <Header>
                <Input placeholder="Pesquisar pelo título" />
            </Header>
            <main>
                <Form>
                    <header>
                        <ButtonText>
                            <FiArrowLeft />
                            Voltar
                        </ButtonText>
                        <h1>Novo filme</h1>
                    </header>
                    <div>
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" type="number" min="0" max="5" />
                    </div>
                    <Textarea placeholder="Observações" />
                    <Section title="Marcadores">
                        <div className="tags">
                            <MovieItem
                                value="React"
                            />
                            <MovieItem
                                isNew
                                placeholder="Novo marcador"
                            />
                        </div>
                    </Section>
                    <div>
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    );
}
