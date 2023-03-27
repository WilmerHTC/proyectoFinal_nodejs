CREATE DATABASE IF NOT EXISTS `cultupaz_org` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `cultupaz_org`;

-- Estructura de tabla para la tabla `aprendiz`
CREATE TABLE `aprendiz` (
  `idAprendiz` int(10) UNSIGNED NOT NULL,
  `nombres` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `numeroIdentificacion` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(12) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `contraseña` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `numeroFicha` varchar(10) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

ALTER TABLE `aprendiz`
  ADD PRIMARY KEY (`correo`);
ALTER TABLE `aprendiz`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;


-- Crear tabla Usuarios..
CREATE TABLE `usuarios` (
  `correo` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `contraseña` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios` FOREIGN KEY (`correo`) REFERENCES `aprendiz` (`correo`);
--

