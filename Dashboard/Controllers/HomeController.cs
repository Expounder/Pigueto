using Dashboard.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dashboard.Controllers
{
    public class HomeController : Controller
    {
        public JsonResult Data(string DataI, string DataF)
        {

            var DataInicio = Convert.ToDateTime("01/" + DataI);
            var DataFim = Convert.ToDateTime("01/" + DataF);

            var list = new List<string>();

            while (DataInicio <= DataFim)
            {
                string competencia = DataInicio.ToString("MM") + "/" + DataInicio.Year.ToString();

                DataInicio = DataInicio.AddMonths(1);

                list.Add(competencia);
            }

            return Json(new { list });


        }
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Calc(List<CalculodoGato> Listarecurso, string Calculo)
        {
            List<Calculado> result = new List<Calculado>();
            foreach (var item in Listarecurso)
            {
                if(Calculo == "1")
                result.Add(new Calculado(item.Recurso_F, item.RequisitoF, (item.Recurso_F - item.RequisitoF), item.Mes));
                else
                    result.Add(new Calculado(item.Recurso_F, item.RequisitoF, (item.RequisitoF - item.Recurso_F), item.Mes));


            }

            return Json(new { result });
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}