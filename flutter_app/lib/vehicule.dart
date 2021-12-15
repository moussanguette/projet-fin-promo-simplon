import 'package:flutter/material.dart';

// Liste des vehicules
class Vehicule extends StatelessWidget {
  const Vehicule({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(3),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: Colors.grey,
      ),
      child: ListTile(
        contentPadding: EdgeInsets.all(5),
        leading: CircleAvatar(
          radius: 30,
          backgroundImage: NetworkImage(''),
        ),
        title: Text(
          "test",
          style: TextStyle(
            fontSize: 20,
            color: Colors.black,
          ),
        ),
        subtitle: Text('dcikdifc dcxie cdjfde mq d'),
      ),
    );
  }
}
