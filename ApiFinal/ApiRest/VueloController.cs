using Datos;
using Entidades;
using System.Data;
using System.Web.Http;

namespace ApiRest
{
    public class VuelosController : ApiController
    {
        [HttpPost]
        [Route("api/AgregarVuelo")]

        public DataTable AgregarVuelo(EntidadesVuelos entidad)
        {
            return DatosVuelos.AgregarVuelo(entidad);
        }


        [HttpPost]
        [Route("api/ObtenerVuelos")]

        public DataTable ObtenerVuelos(EntidadesVuelos entidad)
        {
            return DatosVuelos.ObtenerVuelos(entidad);
        }


        [HttpPost]
        [Route("api/EliminarVuelo")]

        public DataTable EliminarVuelo(EntidadesVuelos entidad)
        {
            return DatosVuelos.EliminarVuelo(entidad);
        }

        [HttpPost]
        [Route("api/ObtenerDatosVuelo")]

        public DataTable ObtenerDatosVuelos(EntidadesVuelos entidad)
        {
            return DatosVuelos.ObtenerDatosVuelo(entidad);
        }
    }
}