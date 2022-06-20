import {Request, Response} from 'express'
import nodemailer from 'nodemailer';
import { text } from 'stream/consumers';
import dotenv from 'dotenv'

dotenv.config();

export const contato = async (req:Request, res:Response)=>{
    //Passo 1: Configurar o transporter
    let transport = nodemailer.createTransport({
        host: process.env.MailHost,
        port: parseInt(process.env.MailPort as string),
        auth: {
          user: process.env.MailUser,
          pass: process.env.MailPass
        }
      });
    //Passo 2: Configurar a mensagem

    let message = {
        from: 'nao-responda@dominio.com.br>',
        to:'suporte@dominio.com.br',
        replyTo: req.body.from ,
        subject:req.body.subject,
        html: req.body.email,
        text: req.body.email
    }
    //Passo 3: Enviar a mensagem

    let info = await transport.sendMail(message);

    console.log("INFO", info);

    res.json({sucess:true});
};

