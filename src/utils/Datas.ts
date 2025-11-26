export const formatarDataMesAno = (data: Date) => {
        return data.toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' });
    };