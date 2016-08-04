
#include <LiquidCrystal.h>
#include <DHT.h>
#include <time.h>

LiquidCrystal lcd(8, 9, 4, 5, 6, 7);


int zxSoundPin = A1;
int tempPin = A2;
int lightPin = A5;
int alarmPin = 11;
int ledPin = 3;
int buttonPin = 2;
int lightOn = 1;
int lightOff = 0;
int alarmValue = 0;

void setup() {
  srand(time(NULL));
  lcd.begin(16, 2);
  pinMode(lightPin, INPUT);
  pinMode(zxSoundPin, INPUT);
  pinMode(tempPin, INPUT);
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
  pinMode(alarmPin, INPUT);
  Serial.begin(9600);
  Serial1.begin(115200);
}

void loop() {
  String motion = "false";
  int light = analogRead(A5);
  int zxSound = analogRead(zxSoundPin);
  int button = digitalRead(buttonPin);
  String buttonCheck = "false";
  int temp = (25 * analogRead(A2) - 2050) / 100;
  alarmValue = digitalRead(alarmPin);
  if (alarmValue == 1) {
    motion = "true";
  }
  else if (alarmValue == 0) {
    motion = "false";
  }
  lcd.clear();
  lcd.setCursor(0, 0);
  if (button == 1 && light < 300) {
    digitalWrite(ledPin, lightOff);
    buttonCheck = "true";
  }
  else if (button == 1 && light > 300) {
    digitalWrite(ledPin, lightOn);
    buttonCheck = "true";
  }
  else {
    digitalWrite(ledPin, lightOn);
    buttonCheck = "false";
  }
  lcd.setCursor(2, 0);
  lcd.print("Temperature");
  lcd.setCursor(6, 1);
  lcd.print(temp);
  lcd.print(" C");
  if (light > 300) {
    digitalWrite(lightPin, lightOn);
  }
  String str = "[{\"id\":" + (String)rand() + ",\"temp\":" + (String)temp + ",\"sound\":" + (String)zxSound + ",\"motion\":" + motion + ",\"button\":" + buttonCheck + "}]";
  Serial1.println(str);
  Serial.println(str);
  delay(3000);

}
