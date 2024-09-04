# -*- coding: utf-8 -*-
# from odoo import http


# class BootIa(http.Controller):
#     @http.route('/boot_ia/boot_ia', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/boot_ia/boot_ia/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('boot_ia.listing', {
#             'root': '/boot_ia/boot_ia',
#             'objects': http.request.env['boot_ia.boot_ia'].search([]),
#         })

#     @http.route('/boot_ia/boot_ia/objects/<model("boot_ia.boot_ia"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('boot_ia.object', {
#             'object': obj
#         })
