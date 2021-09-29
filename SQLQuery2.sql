---Creacion de esquemas---
CREATE SCHEMA Sistema

---Asignacion de tablas a esquemas---
ALTER SCHEMA Sistema transfer dbo.TblContinentes
ALTER SCHEMA Sistema transfer dbo.TblPaises

---llaves foraneas--
ALTER TABLE Sistema.TblPaises
ADD FOREIGN KEY (IdContinente) REFERENCES Sistema.TblContinentes(IdContinente);

/*
	AUTOR:		Jose Quixchan
	FECHA:		13/11/2020
*/
--SP PARA AGREGAR PAIS A CONTINENTE
CREATE PROCEDURE Sistema.SPAgregarPais (
									@_IdContinente			tinyint,
									@_TxtPais				NVARCHAR(100),
									@_TxtCapital			NVARCHAR(100),
									@_IntAnioIndependencia	SMALLINT,
									@_IntPoblacion			INT,
									@_TxtPresidenteActual	NVARCHAR(100),
									@_TxtIdiomaOficial		NVARCHAR(50),
									@_TxtMoneda				NVARCHAR(50)
								)
AS
DECLARE @_FilasAfectadas		TINYINT
		,@_Resultado			SMALLINT
		,@_UltimoId				SMALLINT
		,@_IdPais				int
BEGIN
	BEGIN TRAN
		--Se obtiene el ultimo ID
		SELECT @_UltimoId = ISNULL(MAX(IdPais), 0)
		FROM Sistema.TblPaises as a

		BEGIN TRY
			INSERT INTO TblPaises	(
										
										IdPais,
										IdContinente,
										TxtPais,
										TxtCapital,
										IntAnioIndependencia,
										IntPoblacion,
										TxtPresidenteActual,
										TxtIdiomaOficial,
										TxtMoneda									
									)
			VALUES					(
										
										@_UltimoId + 1,
										@_IdContinente,
										@_TxtPais,
										@_TxtCapital,
										@_IntAnioIndependencia,
										@_IntPoblacion,
										@_TxtPresidenteActual,
										@_TxtIdiomaOficial,
										@_TxtMoneda
									)
		SET @_FilasAfectadas			=	@@ROWCOUNT
	END TRY
	BEGIN CATCH
		SET @_FilasAfectadas			=	0
	END CATCH		

--DETERMINAR SI SE REALIZO CORRECTAMENTE LA TRANSACCION ANTERIOR
IF (@_FilasAfectadas > 0)
		BEGIN
			SET @_Resultado			=	@_UltimoId + 1
			COMMIT
		END
	ELSE
		BEGIN
			SET @_Resultado			=	0
			ROLLBACK
		END
	--DEVOLVER RESULTADO: EL ULTIMO ID QUE UTILIZARÉ MÁS ADELANTE
	SELECT Resultado				=	@_Resultado
END --FIN 


-------------------ObtenerPaises-------------------------------------------
alter proc Sistema.SPObtenerPaises
as
begin
	select
		a.IdPais,
		a.IdContinente
		,a.TxtPais
		,a.TxtCapital
		,a.IntAnioIndependencia
		,a.IntPoblacion
		,a.TxtPresidenteActual
		,a.TxtIdiomaOficial
		,a.TxtMoneda
	from Sistema.TblPaises as a
	where a.IntEstado > 0
end

-----------------------Obtener Datos---------------------------
create proc Sistema.SPObtenerDatosPais(
		@_IdPais int
										)
as
begin
	select 
	a.IdPais,
	a.IdContinente
	,a.TxtPais
	,a.TxtCapital
	,a.IntAnioIndependencia
	,a.IntPoblacion
	,a.TxtPresidenteActual
	,a.TxtIdiomaOficial
	,a.TxtMoneda
	from Sistema.TblPaises as a
	where a.IdPais = @_IdPais
end

-------------------Eliminar Pais------------------------------
alter PROC Sistema.SPEliminarPais (
	@_IdPais INT
)
AS
DECLARE 
	@_FilasAfectadas	TINYINT,
	@_Resultado			INT

BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE	Sistema.TblPaises
			SET		IntEstado = 0
					
			WHERE	IdPais = @_IdPais

			SET		@_FilasAfectadas = @@ROWCOUNT
		END TRY
		BEGIN CATCH
			SET		@_FilasAfectadas = 0
		END CATCH

		IF(@_FilasAfectadas > 0)
			BEGIN
				SET @_Resultado = @_IdPais
				COMMIT
			END
		ELSE
			BEGIN
				SET @_Resultado = 0
			ROLLBACK
		END
	SELECT Resultado  = @_Resultado,
			a.IdContinente
			from Sistema.TblPaises as a
			where a.IdPais = @_IdPais
END

------------------------------Actualizar Pais----------------------------
alter PROC Sistema.SPActualizarPais (
	@_IdPais				INT,
	@_IdContinente			tinyint,
	@_TxtPais				NVARCHAR(100),
	@_TxtCapital			NVARCHAR(100),
	@_IntAnioIndependencia	SMALLINT,
	@_IntPoblacionActual			INT,
	@_TxtPresidenteActual	NVARCHAR(100),
	@_TxtIdiomaOficial		NVARCHAR(50),
	@_TxtMoneda				NVARCHAR(50)
)

AS
DECLARE 
	@_FilasAfectadas	TINYINT,
	@_Resultado			INT

BEGIN
	BEGIN TRAN
		BEGIN TRY
			UPDATE	Sistema.TblPaises
			SET		IdContinente = @_IdContinente,
					TxtPais = @_TxtPais,
					TxtCapital = @_TxtCapital,
					IntAnioIndependencia = @_IntAnioIndependencia,
					IntPoblacion = @_IntPoblacionActual,
					TxtPresidenteActual = @_TxtPresidenteActual,
					TxtIdiomaOficial = @_TxtIdiomaOficial,
					TxtMoneda = @_TxtMoneda
					
			WHERE	IdPais = @_IdPais

			SET		@_FilasAfectadas = @@ROWCOUNT
		END TRY
		BEGIN CATCH
			SET		@_FilasAfectadas = 0
		END CATCH

		IF(@_FilasAfectadas > 0)
			BEGIN
				SET @_Resultado = @_IdPais
				COMMIT
			END
		ELSE
			BEGIN
				SET @_Resultado = 0
			ROLLBACK
		END

	SELECT Resultado  = @_Resultado
END