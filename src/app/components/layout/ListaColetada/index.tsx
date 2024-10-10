'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { InformacoesLead } from './InformacoesLead';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaEye } from "react-icons/fa";


interface Lead {
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

export function ListaColetada() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await fetch('/api/leads');
        const data = await response.json();
        setLeads(data);
      } catch (error) {
        console.error('Erro ao obter leads:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeads();
  }, []);

  const handleRowClick = (lead: Lead) => {
    setSelectedLead(lead);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedLead(null);
  };

  if (loading) {
    return <div>Carregando leads...</div>;
  }

  return (
    <div className="grid">
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Leads Obtidos na campanha</CardTitle>
            <CardDescription>Últimos leads Obtidos</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Empresa</TableHead>
                <TableHead>Cidade</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.length > 0 ? (
                leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div className="font-medium">{lead.nomeContato}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {lead.nomeContato} - {lead.cargo}
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {lead.email}
                      </div>                      
                    </TableCell>
                    <TableCell>{lead.cidade}</TableCell>
                    <TableCell>{lead.estado}</TableCell>
                    <TableCell><Button onClick={() => handleRowClick(lead)} className="cursor-pointer bg-green-600 rounded-full"><FaEye size={18} /></Button></TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    Nenhum lead encontrado
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {selectedLead && (
        <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-center'>Detalhes do Lead</DialogTitle>
            </DialogHeader>
            <InformacoesLead lead={selectedLead} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
