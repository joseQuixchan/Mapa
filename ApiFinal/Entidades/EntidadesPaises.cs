using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class EntidadesPaises
    {

        public string TxtPais { get; set; }
        public int IdPais { get; set; }
        public int IdContinente { get; set; }
        public string TxtCapital { get; set; }
        public int IntAnioIndependencia { get; set; }
        public int IntPoblacion { get; set; }
        public string TxtPresidenteActual { get; set; }
        public string TxtIdiomaOficial { get; set; }
        public string TxtMoneda { get; set; }

        string fecha = String.Format("{0: MM/dd/yyyy}");
    }
}
