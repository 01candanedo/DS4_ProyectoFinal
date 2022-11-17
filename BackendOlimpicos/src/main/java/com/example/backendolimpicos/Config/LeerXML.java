package com.example.backendolimpicos.Config;

import java.io.File;
import java.io.IOException;
import java.util.Base64;

import org.w3c.dom.Document;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

public class LeerXML {
    private String port, dbname, user;

    public String getPort() {
        return port;
    }

    public String getDbname() {
        return dbname;
    }

    public String getUser() {
        return user;
    }

    public void datosXML() throws ParserConfigurationException, SAXException, IOException {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        Base64.Decoder decoder = Base64.getUrlDecoder();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document documento = builder.parse(new File("src/main/java/com/example/backendolimpicos/Config/config.xml"));
        port = documento.getElementsByTagName("port").item(0).getTextContent();
        port = new String(decoder.decode(port));
        dbname = documento.getElementsByTagName("dbname").item(0).getTextContent();
        dbname = new String(decoder.decode(dbname));
        user = documento.getElementsByTagName("user").item(0).getTextContent();
        user = new String(decoder.decode(user));
    }
}
