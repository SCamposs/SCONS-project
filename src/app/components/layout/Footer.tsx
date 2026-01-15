"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useMemo } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = useMemo(() => ({
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
  }), []);

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3">
                <Image
                  src="/logo-white.png"
                  alt="SCONS Logo"
                  width={528}
                  height={151}
                  className="mr-3 h-8 w-auto -translate-x-[6px]"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md text-sm">
                Sistema de navegação otimizada para aplicações corporativas.
                Simplifique o acesso e otimize a produtividade da sua equipe.
              </p>

              {/* Social links */}
              <div className="flex space-x-3">
                {["LinkedIn", "Twitter", "GitHub"].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-colors duration-300 will-change-transform backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs font-bold text-white">
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
                <h4 className="font-semibold text-white mb-3 capitalize text-sm">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-sm"
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
          className="mt-10 pt-6 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Fique Atualizado</h4>
              <p className="text-gray-400 text-sm">
                Receba as últimas novidades e atualizações do SCONS
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors duration-300 text-sm text-white placeholder:text-gray-400"
              />
              <motion.button
                className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-medium transition-colors duration-300 will-change-transform text-sm text-white backdrop-blur-sm"
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
          className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
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
              <div className="w-2 h-2 bg-white/80 rounded-full shadow-sm" />
              <span className="text-gray-400 text-sm">Sistema Online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

const MemoizedFooter = memo(Footer);
export { MemoizedFooter as Footer };
