export interface Lead {
  id: number;
  nomeEmpresa: string;
  cidade: string;
  estado: string;
  faixaFaturamento: string;
  nomeContato: string;
  cargo: string;
  email: string;
  mensagem: string;
}

export interface InformacoesLeadProps {
  lead: Lead;
}