using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dashboard.Models
{
    public class CalculodoGato
    {
        public string Recurso { get; set; }
        public string Requisito { get; set; }
        public int Mes { get; set; }
        public decimal Recurso_F => Convert.ToDecimal(Recurso);
        public decimal RequisitoF => Convert.ToDecimal(Requisito);


    }
    public class Calculado
    {
        public Calculado(decimal recurso, decimal requisito, decimal total, int mes)
        {
            Recurso = recurso;
            Requisito = requisito;
            Total = total;
            Mes = mes;
        }

        public Calculado()
        {
        }

        public decimal Recurso { get; set; }
        public decimal Requisito { get; set; }
        public decimal Total { get; set; }
        public string Recurso_F => Recurso.ToString("N3");
        public string Requisito_F => Requisito.ToString("N3");
        public string Total_F => Total.ToString("N3");
        public int Mes { get; set; }


    }
}