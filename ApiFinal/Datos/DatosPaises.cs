using Entidades;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class DatosPaises
    {

        private static DataTable DT = new DataTable();

        public static DataTable AgregarPais(EntidadesPaises Entidad)
        {
            SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPAgregarPais");
            Comando.Parameters.AddWithValue("@_IdContinente", Entidad.IdContinente);
            Comando.Parameters.AddWithValue("@_TxtPais", Entidad.TxtPais);
            Comando.Parameters.AddWithValue("@_TxtCapital", Entidad.TxtCapital);
            Comando.Parameters.AddWithValue("@_IntAnioIndependencia", Entidad.IntAnioIndependencia);
            Comando.Parameters.AddWithValue("@_IntPoblacion", Entidad.IntPoblacion);
            Comando.Parameters.AddWithValue("@_TxtPresidenteActual", Entidad.TxtPresidenteActual);
            Comando.Parameters.AddWithValue("@_TxtIdiomaOficial", Entidad.TxtIdiomaOficial);
            Comando.Parameters.AddWithValue("@_TxtMoneda", Entidad.TxtMoneda);

            DT = Conexion.EjecutarComandoSelect(Comando);
            return DT;
        }       
          
        public static DataTable ObtenerPaises(EntidadesPaises Entidad)
        {
           
            SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPObtenerPaises");
            DT = Conexion.EjecutarComandoSelect(Comando);
 
            return DT;
        }

        public static DataTable ObtenerDatosPais(EntidadesPaises Entidad)
        {
        
             SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPObtenerDatosPais");
             Comando.Parameters.AddWithValue("@_IdPais", Entidad.IdPais);
             DT = Conexion.EjecutarComandoSelect(Comando);
            

            return DT;
        }




        public static DataTable EliminarPais(EntidadesPaises Entidad)
        {
                SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPEliminarPais");
                Comando.Parameters.AddWithValue("@_IdPais", Entidad.IdPais);

                DT = Conexion.EjecutarComandoSelect(Comando);

            return DT;
        }



        public static DataTable ActualizarPais(EntidadesPaises Entidad)
        {
             SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPActualizarPais");
            Comando.Parameters.AddWithValue("@_IdPais", Entidad.IdPais);
            Comando.Parameters.AddWithValue("@_IdContinente", Entidad.IdContinente);
            Comando.Parameters.AddWithValue("@_TxtPais", Entidad.TxtPais);
            Comando.Parameters.AddWithValue("@_TxtCapital", Entidad.TxtCapital);
            Comando.Parameters.AddWithValue("@_IntAnioIndependencia", Entidad.IntAnioIndependencia);
            Comando.Parameters.AddWithValue("@_IntPoblacionActual", Entidad.IntPoblacion);
            Comando.Parameters.AddWithValue("@_TxtPresidenteActual", Entidad.TxtPresidenteActual);
            Comando.Parameters.AddWithValue("@_TxtIdiomaOficial", Entidad.TxtIdiomaOficial);
            Comando.Parameters.AddWithValue("@_TxtMoneda", Entidad.TxtMoneda);

            DT = Conexion.EjecutarComandoSelect(Comando);
           
            return DT;

        }
    }
}
