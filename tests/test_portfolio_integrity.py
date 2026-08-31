"""
Test Suite de Integridad y Validación Estructural del Portafolio
Fase PDCO: CONTROL | Estándar: ISO/IEC 25010 / Python unittest
Autor: Adán Y. Sánchez Cubillos
"""

import os
import json
import unittest

WORKSPACE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX_HTML = os.path.join(WORKSPACE_DIR, "index.html")
PROJECTS_DATA_JS = os.path.join(WORKSPACE_DIR, "js", "projects-data.js")
APP_JS = os.path.join(WORKSPACE_DIR, "js", "app.js")
STYLE_CSS = os.path.join(WORKSPACE_DIR, "css", "style.css")
METADATA_JSON = os.path.join(WORKSPACE_DIR, "metadata.json")


class TestPortfolioIntegrity(unittest.TestCase):

    def test_metadata_json_schema(self):
        """Valida que metadata.json contenga todos los campos requeridos por el marco PDCO."""
        self.assertTrue(os.path.exists(METADATA_JSON), "metadata.json no existe")
        with open(METADATA_JSON, "r", encoding="utf-8") as f:
            data = json.load(f)

        required_fields = ["project", "version", "pdco_phase", "author", "email", "artifacts"]
        for field in required_fields:
            self.assertIn(field, data, f"Campo {field} faltante en metadata.json")

        self.assertEqual(data["author"], "Adán Y. Sánchez Cubillos")
        self.assertEqual(data["email"], "adansanchez@hotmail.com")
        self.assertIn("Ingeniería de Software y Ciencia de Datos", data["role"])

    def test_artifacts_exist_on_filesystem(self):
        """Valida que cada artefacto listado en metadata.json exista físicamente."""
        with open(METADATA_JSON, "r", encoding="utf-8") as f:
            data = json.load(f)

        for rel_path in data.get("artifacts", []):
            full_path = os.path.join(WORKSPACE_DIR, rel_path.replace("/", os.sep))
            self.assertTrue(os.path.exists(full_path), f"El artefacto {rel_path} no existe en el sistema de archivos")

    def test_index_html_semantic_structure(self):
        """Valida que index.html contenga encabezados, metas SEO y secciones obligatorias."""
        self.assertTrue(os.path.exists(INDEX_HTML), "index.html no existe")
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            content = f.read()

        self.assertIn("<!DOCTYPE html>", content)
        self.assertIn('<html lang="es">', content)
        self.assertIn("Adán Y. Sánchez Cubillos", content)
        self.assertIn("adansanchez@hotmail.com", content)
        self.assertIn("Ingeniería de Software y Ciencia de Datos", content)

        required_sections = ["inicio", "sobre-mi", "competencias", "proyectos", "investigacion", "metodologia", "contacto"]
        for sec in required_sections:
            self.assertIn(f'id="{sec}"', content, f"Sección #{sec} no encontrada en index.html")

    def test_no_google_drive_links_in_portfolio(self):
        """Valida que no existan enlaces a Google Drive en index.html ni en projects-data.js."""
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            html_content = f.read()
        self.assertNotIn("drive.google.com", html_content, "index.html aún contiene enlaces a Google Drive")

        with open(PROJECTS_DATA_JS, "r", encoding="utf-8") as f:
            js_content = f.read()
        self.assertNotIn("drive.google.com", js_content, "projects-data.js aún contiene enlaces a Google Drive")

    def test_no_folder_icons_in_portfolio(self):
        """Valida que no existan iconos de carpeta SVG en el HTML ni en el renderizador JS."""
        folder_svg_path = "M22 19a2 2 0 01-2 2"
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            html_content = f.read()
        self.assertNotIn(folder_svg_path, html_content, "index.html aún contiene iconos de carpeta")

        with open(APP_JS, "r", encoding="utf-8") as f:
            js_content = f.read()
        self.assertNotIn(folder_svg_path, js_content, "app.js aún contiene iconos de carpeta")

    def test_projects_data_js_integrity(self):
        """Valida que projects-data.js contenga los proyectos clave y configuraciones."""
        self.assertTrue(os.path.exists(PROJECTS_DATA_JS), "js/projects-data.js no existe")
        with open(PROJECTS_DATA_JS, "r", encoding="utf-8") as f:
            content = f.read()

        self.assertIn("PROJECTS_DATA", content)
        self.assertIn("SKILLS_DATA", content)
        self.assertIn("CODE_SNIPPETS_DATA", content)

        # Validar presencia de proyectos insignia
        self.assertIn("sipta-datajam-alcaldia", content)
        self.assertIn("cgi-tokyo-ml-telecom", content)
        self.assertIn("data-wrangling-bogota", content)

    def test_app_js_event_listeners(self):
        """Valida que app.js defina los controladores interactivos esenciales."""
        self.assertTrue(os.path.exists(APP_JS), "js/app.js no existe")
        with open(APP_JS, "r", encoding="utf-8") as f:
            content = f.read()

        expected_functions = [
            "initNavbar",
            "renderProjects",
            "renderSkillsTab",
            "initSiptaViewer",
            "openProjectModal",
            "copyEmail",
            "showToast",
            "initCodeSnippetViewer"
        ]
        for fn in expected_functions:
            self.assertIn(fn, content, f"Función controladora {fn} no encontrada en app.js")

    def test_wcag_color_contrast_tokens(self):
        """Valida que style.css defina variables CSS para temas y contraste de color."""
        self.assertTrue(os.path.exists(STYLE_CSS), "css/style.css no existe")
        with open(STYLE_CSS, "r", encoding="utf-8") as f:
            content = f.read()

        self.assertIn(":root", content)
        self.assertIn("--color-primary", content)
        self.assertIn("--bg-base", content)
        self.assertIn("--text-main", content)
        self.assertIn("--border-highlight", content)


if __name__ == "__main__":
    unittest.main()
