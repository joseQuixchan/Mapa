using Datos;
using Entidades;
using System.Data;
using System.Web.Http;

namespace ApiRest
{
    public class PaisesController : ApiController
    {
        [HttpPost]
        [Route("api/AgregarPais")]

        public DataTable AgregarPais(EntidadesPaises entidad)
        {
            return DatosPaises.AgregarPais(entidad);
        }


        [HttpPost]
        [Route("api/ObtenerPaises")]

        public DataTable ObtenerPais(EntidadesPaises entidad)
        {
            return DatosPaises.ObtenerPaises(entidad);
        }


        [HttpPost]
        [Route("api/ObtenerDatosPais")]

        public DataTable ObtenerDatosPais(EntidadesPaises entidad)
        {
            return DatosPaises.ObtenerDatosPais(entidad);
        }


        [HttpPost]
        [Route("api/EliminarPais")]

        public DataTable EliminarPais(EntidadesPaises entidad)
        {
            return DatosPaises.EliminarPais(entidad);
        }


        [HttpPost]
        [Route("api/ActualizarPais")]

        public DataTable ActualizarPais(EntidadesPaises entidad)
        {
            return DatosPaises.ActualizarPais(entidad);
        }
    }
}