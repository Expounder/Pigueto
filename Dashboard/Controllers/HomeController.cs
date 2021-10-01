using Dashboard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dashboard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Calc(List<CalculodoGato> Listarecurso)
        {
            List<Calculado> result = new List<Calculado>();
            foreach (var item in Listarecurso)
            {
                result.Add(new Calculado(item.Recurso_F, item.RequisitoF, (item.Recurso_F - item.RequisitoF), item.Mes));

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