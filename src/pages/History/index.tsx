import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>Meus Historico!</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Projeto 1</td>
                            <td>25</td>
                            <td>Há 2 semanas</td>
                            <td>
                                <Status statusColor="green">
                                    Concluido
                                </Status>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Projeto 1</td>
                            <td>25</td>
                            <td>Há 2 semanas</td>
                            <td>
                                <Status statusColor="green">
                                    Concluido
                                </Status>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Projeto 1</td>
                            <td>25</td>
                            <td>Há 2 semanas</td>
                            <td>
                                <Status statusColor="green">
                                    Concluido
                                </Status>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Projeto 1</td>
                            <td>25</td>
                            <td>Há 2 semanas</td>
                            <td>
                                <Status statusColor="green">
                                    Concluido
                                </Status>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Projeto 1</td>
                            <td>25</td>
                            <td>Há 2 semanas</td>
                            <td>
                                <Status statusColor="yellow">
                                    em andamento
                                </Status>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Projeto 1</td>
                            <td>25</td>
                            <td>Há 2 semanas</td>
                            <td>
                                <Status statusColor="red">
                                    interrompido
                                </Status>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Projeto 1</td>
                            <td>25</td>
                            <td>Há 2 semanas</td>
                            <td>
                                <Status statusColor="green">
                                    Concluido
                                </Status>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    );
};

