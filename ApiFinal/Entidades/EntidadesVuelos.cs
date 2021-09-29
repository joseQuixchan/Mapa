using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class EntidadesVuelos
    {

        public int IdVuelo { get; set; }
        public int IdOperador { get; set; }
        public DateTime FechaIngreso { get; set; }
        public int NumeroVuelo { get; set; }
        public string HoraIngreso { get; set; }
        public string HoraSalida { get; set; }
        public int Domingo { get; set; }
        public int Lunes { get; set; }
        public int Martes { get; set; }
        public int Miercoles { get; set; }
        public int Jueves { get; set; }
        public int Viernes { get; set; }
        public int Sabado { get; set; }

        
    }
}
