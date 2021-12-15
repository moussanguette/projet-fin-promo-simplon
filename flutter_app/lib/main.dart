import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'login.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      // pour lancer l'application sur emulateur ou un appareil
      title: 'Flutter Login',
      debugShowCheckedModeBanner: false,
      home: LoginScreen(),
    );
  }
}
