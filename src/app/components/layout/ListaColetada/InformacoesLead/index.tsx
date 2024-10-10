import { InformacoesLeadProps } from "@/@types/Lead";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { useState, useEffect } from 'react';

interface Representante {
  id: string; 
  nome: string;
}

export function InformacoesLead({ lead }: InformacoesLeadProps) {
  const [representantes, setRepresentantes] = useState<Representante[]>([]); 
  const [selectedRepresentative, setSelectedRepresentative] = useState<string | null>(null);
  useEffect(() => {
    const fetchRepresentantes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/representantes');
        const data = await response.json();
        setRepresentantes(data);
      } catch (error) {
        console.error('Erro ao buscar representantes:', error);
      }
    };

    fetchRepresentantes();
  }, []); 

  const handleRepresentativeChange = async (value: string) => {
    setSelectedRepresentative(value);
    console.log(`Representante selecionado: ${value}`);
  };

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-2">
        <p><strong>Empresa:</strong> {lead.nomeEmpresa}</p>
        <p><strong>Contato:</strong> {lead.nomeContato}</p>
        <p><strong>Cargo:</strong> {lead.cargo}</p>
        <p><strong>Email:</strong> {lead.email}</p>
        <p><strong>Cidade:</strong> {lead.cidade}</p>
        <p><strong>Estado:</strong> {lead.estado}</p>
        <p><strong>Faixa de Faturamento:</strong> {lead.faixaFaturamento}</p>
        <p><strong>Mensagem:</strong> {lead.mensagem}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Ações Realizadas</h2>
        <div className='flex items-center gap-1'><p>Contato realizado</p><Switch /></div>
        <div className="flex flex-col">
          <Select onValueChange={handleRepresentativeChange}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Atribuir á um representante" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Representantes</SelectLabel>
                {representantes.map((representante) => (
                  <SelectItem key={representante.id} value={representante.id}>
                    {representante.nome}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
