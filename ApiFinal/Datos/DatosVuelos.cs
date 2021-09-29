using Entidades;
using System.Data;
using System.Data.SqlClient;


namespace Datos
{
    public class DatosVuelos
    {

        private static DataTable DT = new DataTable();

        public static DataTable AgregarVuelo(EntidadesVuelos Entidad)
        {
            SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPAgregarVuelo");
            Comando.Parameters.AddWithValue("@_IdOperador", Entidad.IdOperador);
            Comando.Parameters.AddWithValue("@_NumeroVuelo", Entidad.NumeroVuelo);
            Comando.Parameters.AddWithValue("@_FechaIngreso", Entidad.FechaIngreso);
            Comando.Parameters.AddWithValue("@_HoraIngreso", Entidad.HoraIngreso);
            Comando.Parameters.AddWithValue("@_HoraSalida", Entidad.HoraSalida);
            Comando.Parameters.AddWithValue("@_Domingo", Entidad.Domingo);
            Comando.Parameters.AddWithValue("@_Lunes", Entidad.Lunes);
            Comando.Parameters.AddWithValue("@_Martes", Entidad.Martes);
            Comando.Parameters.AddWithValue("@_Miercoles", Entidad.Miercoles);
            Comando.Parameters.AddWithValue("@_Jueves", Entidad.Jueves);
            Comando.Parameters.AddWithValue("@_Viernes", Entidad.Viernes);
            Comando.Parameters.AddWithValue("@_Sabado", Entidad.Sabado);
        

            DT = Conexion.EjecutarComandoSelect(Comando);
            return DT;
        }       
          
        public static DataTable ObtenerVuelos(EntidadesVuelos Entidad)
        {
           
            SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPObtenerVuelos");
            DT = Conexion.EjecutarComandoSelect(Comando);
 
            return DT;
        }


        public static DataTable EliminarVuelo(EntidadesVuelos Entidad)
        {
                SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPEliminarVuelos");
                Comando.Parameters.AddWithValue("@_IdVuelo", Entidad.IdVuelo);

                DT = Conexion.EjecutarComandoSelect(Comando);

            return DT;
        }

        public static DataTable ObtenerDatosVuelo(EntidadesVuelos Entidad)
        {

            SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPObtenerDatosVuelo");
            Comando.Parameters.AddWithValue("@_IdVuelo", Entidad.IdVuelo);
            DT = Conexion.EjecutarComandoSelect(Comando);


            return DT;
        }

        public static DataTable ActualizarVuelo(EntidadesVuelos Entidad)
        {
            SqlCommand Comando = Conexion.CrearComandoProc("Sistema.SPActualizarVuelo");
            Comando.Parameters.AddWithValue("@_IdVuelo", Entidad.IdVuelo);
            Comando.Parameters.AddWithValue("@_IdOperador", Entidad.IdOperador);
            Comando.Parameters.AddWithValue("@_NumeroVuelo", Entidad.NumeroVuelo);
            Comando.Parameters.AddWithValue("@_FechaIngreso", Entidad.FechaIngreso);
            Comando.Parameters.AddWithValue("@_HoraIngreso", Entidad.HoraIngreso);
            Comando.Parameters.AddWithValue("@_HoraSalida", Entidad.HoraSalida);
            Comando.Parameters.AddWithValue("@_Domingo", Entidad.Domingo);
            Comando.Parameters.AddWithValue("@_Lunes", Entidad.Lunes);
            Comando.Parameters.AddWithValue("@_Martes", Entidad.Martes);
            Comando.Parameters.AddWithValue("@_Miercoles", Entidad.Miercoles);
            Comando.Parameters.AddWithValue("@_Jueves", Entidad.Jueves);
            Comando.Parameters.AddWithValue("@_Viernes", Entidad.Viernes);
            Comando.Parameters.AddWithValue("@_Sabado", Entidad.Sabado);
            DT = Conexion.EjecutarComandoSelect(Comando);

            return DT;

        }
    }
}
