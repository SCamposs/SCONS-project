"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produto: [
      { name: "Recursos", href: "#" },
      { name: "Segurança", href: "#" },
      { name: "Integrações", href: "#" },
      { name: "Atualizações", href: "#" },
    ],
    empresa: [
      { name: "Sobre Nós", href: "#" },
      { name: "Carreiras", href: "#" },
      { name: "Contato", href: "#" },
      { name: "Blog", href: "#" },
    ],
    suporte: [
      { name: "Documentação", href: "#" },
      { name: "Central de Ajuda", href: "#" },
      { name: "Status", href: "#" },
      { name: "API", href: "#" },
    ],
    legal: [
      { name: "Privacidade", href: "#" },
      { name: "Termos de Uso", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "LGPD", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/logo-white.png"
                  alt="SCONS Logo"
                  width={528}
                  height={151}
                  className="mr-3 h-10 w-auto -translate-x-[6px]"
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Sistema de navegação otimizada para aplicações corporativas.
                Simplifique o acesso e otimize a produtividade da sua equipe.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                {["LinkedIn", "Twitter", "GitHub"].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-bold">
                      {social.charAt(0)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white mb-4 capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        {/* Newsletter section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Fique Atualizado</h4>
              <p className="text-gray-400">
                Receba as últimas novidades e atualizações do SCONS
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <motion.button
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inscrever-se
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} SCONS. Todos os direitos reservados.
          </p>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">
              Desenvolvido por Soares Campos
            </span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-gray-400 text-sm">Sistema Online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
