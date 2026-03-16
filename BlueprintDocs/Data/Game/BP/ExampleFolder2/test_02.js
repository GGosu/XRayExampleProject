(function(){window.__BP_DATA__=window.__BP_DATA__||{};window.__BP_DATA__["test_02"]={
	"schema_version": "1.0",
	"data":
	{
		"name": "test_02",
		"path": "/Game/BP/ExampleFolder2/test_02.test_02",
		"parentClass": "Actor",
		"parentClassPath": "/Script/Engine.Actor",
		"parentIsNative": true,
		"variables": [
			{
				"name": "SomeReadOnlyVariable",
				"type": "string",
				"default": "test",
				"public": false
			},
			{
				"name": "someUnusedDispatcher",
				"type": "FsomeUnusedDispatcher",
				"default": "(reflected)",
				"public": true
			},
			{
				"name": "someUsedDispatcher",
				"type": "FsomeUsedDispatcher",
				"default": "(reflected)",
				"public": true
			},
			{
				"name": "somePartlyUsedDispatcher",
				"type": "FsomePartlyUsedDispatcher",
				"default": "(reflected)",
				"public": true
			},
			{
				"name": "someOnFireDispatcher",
				"type": "FsomeOnFireDispatcher",
				"default": "(reflected)",
				"public": true
			}
		],
		"functions": [
			{
				"name": "myCustomPrint",
				"returnType": "void",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": false,
				"complexityScore": 1,
				"localVariables": []
			},
			{
				"name": "ReceiveBeginPlay",
				"returnType": "void",
				"public": false,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 2,
				"localVariables": []
			},
			{
				"name": "ReceiveTick",
				"returnType": "void",
				"public": false,
				"isInterfaceFunction": false,
				"parameters": [
					"DeltaSeconds: float"
				],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 2,
				"localVariables": []
			},
			{
				"name": "someOnFireDispatcher_Event",
				"returnType": "void",
				"public": true,
				"isInterfaceFunction": false,
				"parameters": [],
				"isNative": false,
				"isEvent": true,
				"complexityScore": 1,
				"localVariables": []
			}
		],
		"components": [
			{
				"name": "SCS_Components",
				"type": "SimpleConstructionScript",
				"parent": "Root"
			}
		],
		"graphs": [
			{
				"name": "EventGraph",
				"type": "EventGraph",
				"nodeCount": 23,
				"nodes": [
					{
						"guid": "1BCEF949482586B28665D3B5F1B20A1A",
						"type": "K2Node_Event",
						"title": "Event BeginPlay",
						"executionOrder": 0,
						"isEnabled": true,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "Event BeginPlay",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"858AA82844FDC75063706DACA31B8BA0.execute"
								]
							}
						]
					},
					{
						"guid": "7C9B41D248557766C9B3A5ACBD59ECB6",
						"type": "K2Node_Event",
						"title": "Event ActorBeginOverlap",
						"executionOrder": -1,
						"isEnabled": false,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OtherActor",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "9749906E4973A78774F71CBDE9259A93",
						"type": "K2Node_Event",
						"title": "Event Tick",
						"executionOrder": 7,
						"isEnabled": true,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "Event Tick",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"5BB98D764B0834735BB031916EAC1A1F.execute"
								]
							},
							{
								"name": "DeltaSeconds",
								"type": "real",
								"direction": "Output",
								"default": "0.0",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "61C244BA46BC7EA4F4B6D4B655FDB8F7",
						"type": "K2Node_CallFunction",
						"title": "Get All Actors Of Class",
						"executionOrder": 14,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "GetAllActorsOfClass",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"ActorClass: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"5BB98D764B0834735BB031916EAC1A1F.then_0"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FE2E20FD4078C0C75B4F4AADDA1B3FCE.execute"
								]
							},
							{
								"name": "ActorClass",
								"type": "class",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "OutActors",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2BB2D7C14D2430AC440EC3935E46F746.Array"
								]
							}
						]
					},
					{
						"guid": "2BB2D7C14D2430AC440EC3935E46F746",
						"type": "K2Node_GetArrayItem",
						"title": "Get (a copy)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Array",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"61C244BA46BC7EA4F4B6D4B655FDB8F7.OutActors"
								]
							},
							{
								"name": "Dimension 1",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Output",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FE2E20FD4078C0C75B4F4AADDA1B3FCE.Object"
								]
							}
						]
					},
					{
						"guid": "FE2E20FD4078C0C75B4F4AADDA1B3FCE",
						"type": "K2Node_DynamicCast",
						"title": "Cast To BP_Test_01",
						"executionOrder": 15,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": true,
						"compilerError": "'Item' is already a 'BP Test 01', you don't need  Cast To BP_Test_01 .",
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "cast",
							"operation": "dynamic_cast",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "BP_Test_01_C",
							"castToType": "BP_Test_01_C",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"61C244BA46BC7EA4F4B6D4B655FDB8F7.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"279A293C4340EF9E555A02B238B49683.execute"
								]
							},
							{
								"name": "CastFailed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"2BB2D7C14D2430AC440EC3935E46F746.Output"
								]
							},
							{
								"name": "AsBP Test 01",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"279A293C4340EF9E555A02B238B49683.self"
								]
							}
						]
					},
					{
						"guid": "279A293C4340EF9E555A02B238B49683",
						"type": "K2Node_CallFunction",
						"title": "Some Other Used Event",
						"executionOrder": 16,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "SomeOtherUsedEvent",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: SomeOtherUsedEvent()"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FE2E20FD4078C0C75B4F4AADDA1B3FCE.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"FE2E20FD4078C0C75B4F4AADDA1B3FCE.AsBP Test 01"
								]
							}
						]
					},
					{
						"guid": "858AA82844FDC75063706DACA31B8BA0",
						"type": "K2Node_CallDelegate",
						"title": "Call Some Used Dispatcher",
						"executionOrder": 1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"1BCEF949482586B28665D3B5F1B20A1A.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"6587EF444D0FB5D629B7789DBD74732F.execute"
								]
							}
						]
					},
					{
						"guid": "5BB98D764B0834735BB031916EAC1A1F",
						"type": "K2Node_ExecutionSequence",
						"title": "Sequence",
						"executionOrder": 8,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"9749906E4973A78774F71CBDE9259A93.then"
								]
							},
							{
								"name": "then_0",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"61C244BA46BC7EA4F4B6D4B655FDB8F7.execute"
								]
							},
							{
								"name": "then_1",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3121E0834B4B67A695A080976B3BDB8C.execute"
								]
							},
							{
								"name": "then_2",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C6151D3F4A279F1FD11E7B95726C66AE.execute"
								]
							},
							{
								"name": "then_3",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CA59FE5E43FAED0B726C77B87228D250.execute"
								]
							}
						]
					},
					{
						"guid": "3121E0834B4B67A695A080976B3BDB8C",
						"type": "K2Node_CreateWidget",
						"title": "Create Widget",
						"executionOrder": 12,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"5BB98D764B0834735BB031916EAC1A1F.then_1"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"15B620E248A4C3EDBFBBEB8C41D290E7.execute"
								]
							},
							{
								"name": "Class",
								"type": "class",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "ReturnValue",
								"type": "object",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"15B620E248A4C3EDBFBBEB8C41D290E7.self"
								]
							},
							{
								"name": "OwningPlayer",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "15B620E248A4C3EDBFBBEB8C41D290E7",
						"type": "K2Node_CallFunction",
						"title": "Add to Viewport",
						"executionOrder": 13,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "AddToViewport",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"self: AddToViewport()",
								"ZOrder: 0"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3121E0834B4B67A695A080976B3BDB8C.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "self",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"3121E0834B4B67A695A080976B3BDB8C.ReturnValue"
								]
							},
							{
								"name": "ZOrder",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "C6151D3F4A279F1FD11E7B95726C66AE",
						"type": "K2Node_CallFunction",
						"title": "Set Timer by Function Name",
						"executionOrder": 11,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "SetTimer",
							"literalValue": "Object: ?",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"Object: ?",
								"FunctionName: myCustomPrint",
								"Time: 0.010000",
								"bLooping: true",
								"InitialStartDelay: 0.000000",
								"InitialStartDelayVariance: 0.000000"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"5BB98D764B0834735BB031916EAC1A1F.then_2"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Object",
								"type": "object",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "FunctionName",
								"type": "string",
								"direction": "Input",
								"default": "myCustomPrint",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Time",
								"type": "real",
								"direction": "Input",
								"default": "0.010000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bLooping",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InitialStartDelay",
								"type": "real",
								"direction": "Input",
								"default": "0.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InitialStartDelayVariance",
								"type": "real",
								"direction": "Input",
								"default": "0.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "ReturnValue",
								"type": "struct",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "CA59FE5E43FAED0B726C77B87228D250",
						"type": "K2Node_MacroInstance",
						"title": "For Loop",
						"executionOrder": 9,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "loop",
							"operation": "loop",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"5BB98D764B0834735BB031916EAC1A1F.then_3"
								]
							},
							{
								"name": "FirstIndex",
								"type": "int",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LastIndex",
								"type": "int",
								"direction": "Input",
								"default": "20",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "LoopBody",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BFCD771F4E45A8064E2E1892EE480B19.execute"
								]
							},
							{
								"name": "Index",
								"type": "int",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"B442E576426BB93B4A2812913C26B24D.InInt"
								]
							},
							{
								"name": "Completed",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "BFCD771F4E45A8064E2E1892EE480B19",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 10,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"CA59FE5E43FAED0B726C77B87228D250.LoopBody"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"B442E576426BB93B4A2812913C26B24D.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "B442E576426BB93B4A2812913C26B24D",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"CA59FE5E43FAED0B726C77B87228D250.Index"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BFCD771F4E45A8064E2E1892EE480B19.InString"
								]
							}
						]
					},
					{
						"guid": "6587EF444D0FB5D629B7789DBD74732F",
						"type": "K2Node_IfThenElse",
						"title": "Branch",
						"executionOrder": 2,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "branch",
							"operation": "if",
							"conditionExpression": "true",
							"variableName": "",
							"functionName": "",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"858AA82844FDC75063706DACA31B8BA0.then"
								]
							},
							{
								"name": "Condition",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4C7341E741D6D4FC440A8DB30136586D.execute"
								]
							},
							{
								"name": "else",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "4C7341E741D6D4FC440A8DB30136586D",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 3,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: SomeReadOnlyVariable",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"6587EF444D0FB5D629B7789DBD74732F.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C03D6C984CDE3D4F1ED2EF9E28A30FC7.execute"
								]
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"E7093FB545DBAD220099DF952A9D6B9A.SomeReadOnlyVariable"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "C03D6C984CDE3D4F1ED2EF9E28A30FC7",
						"type": "K2Node_AddDelegate",
						"title": "Bind Event to Some on Fire Dispatcher",
						"executionOrder": 4,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4C7341E741D6D4FC440A8DB30136586D.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C6ED1CCB428A983BF443F9BEAECF5089.execute"
								]
							},
							{
								"name": "Delegate",
								"type": "delegate",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BB0E3CCC4009D114C4FA94A76F7EB055.OutputDelegate"
								]
							}
						]
					},
					{
						"guid": "BB0E3CCC4009D114C4FA94A76F7EB055",
						"type": "K2Node_CustomEvent",
						"title": "someOnFireDispatcher_Event",
						"executionOrder": 17,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "event",
							"operation": "trigger",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "someOnFireDispatcher_Event",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": []
						},
						"pins": [
							{
								"name": "OutputDelegate",
								"type": "delegate",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C03D6C984CDE3D4F1ED2EF9E28A30FC7.Delegate",
									"EAC385864CB32ABADC2204B1FFB5D191.Delegate"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"41A103F249432696543985A4A3862C0C.execute"
								]
							}
						]
					},
					{
						"guid": "41A103F249432696543985A4A3862C0C",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 18,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Hello",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BB0E3CCC4009D114C4FA94A76F7EB055.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "C6ED1CCB428A983BF443F9BEAECF5089",
						"type": "K2Node_CallFunction",
						"title": "Delay",
						"executionOrder": 5,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "Delay",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"Duration: 10.000000"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C03D6C984CDE3D4F1ED2EF9E28A30FC7.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"EAC385864CB32ABADC2204B1FFB5D191.execute"
								]
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "10.000000",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "EAC385864CB32ABADC2204B1FFB5D191",
						"type": "K2Node_RemoveDelegate",
						"title": "Unbind Event from Some on Fire Dispatcher",
						"executionOrder": 6,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"C6ED1CCB428A983BF443F9BEAECF5089.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Delegate",
								"type": "delegate",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"BB0E3CCC4009D114C4FA94A76F7EB055.OutputDelegate"
								]
							}
						]
					},
					{
						"guid": "E7093FB545DBAD220099DF952A9D6B9A",
						"type": "K2Node_VariableGet",
						"title": "Get SomeReadOnlyVariable",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "SomeReadOnlyVariable",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"4C7341E741D6D4FC440A8DB30136586D.InString"
								]
							}
						]
					}
				],
				"entryNodes": [
					"1BCEF949482586B28665D3B5F1B20A1A",
					"9749906E4973A78774F71CBDE9259A93",
					"BB0E3CCC4009D114C4FA94A76F7EB055"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "1BCEF949482586B28665D3B5F1B20A1A",
						"toNodeGuid": "858AA82844FDC75063706DACA31B8BA0",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "858AA82844FDC75063706DACA31B8BA0",
						"toNodeGuid": "6587EF444D0FB5D629B7789DBD74732F",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "6587EF444D0FB5D629B7789DBD74732F",
						"toNodeGuid": "4C7341E741D6D4FC440A8DB30136586D",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "branch_true"
					},
					{
						"fromNodeGuid": "4C7341E741D6D4FC440A8DB30136586D",
						"toNodeGuid": "C03D6C984CDE3D4F1ED2EF9E28A30FC7",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "C03D6C984CDE3D4F1ED2EF9E28A30FC7",
						"toNodeGuid": "C6ED1CCB428A983BF443F9BEAECF5089",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "C6ED1CCB428A983BF443F9BEAECF5089",
						"toNodeGuid": "EAC385864CB32ABADC2204B1FFB5D191",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "9749906E4973A78774F71CBDE9259A93",
						"toNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
						"toNodeGuid": "CA59FE5E43FAED0B726C77B87228D250",
						"fromPin": "then_3",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "CA59FE5E43FAED0B726C77B87228D250",
						"toNodeGuid": "BFCD771F4E45A8064E2E1892EE480B19",
						"fromPin": "LoopBody",
						"toPin": "execute",
						"edgeType": "loop_body"
					},
					{
						"fromNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
						"toNodeGuid": "C6151D3F4A279F1FD11E7B95726C66AE",
						"fromPin": "then_2",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
						"toNodeGuid": "3121E0834B4B67A695A080976B3BDB8C",
						"fromPin": "then_1",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "3121E0834B4B67A695A080976B3BDB8C",
						"toNodeGuid": "15B620E248A4C3EDBFBBEB8C41D290E7",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
						"toNodeGuid": "61C244BA46BC7EA4F4B6D4B655FDB8F7",
						"fromPin": "then_0",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "61C244BA46BC7EA4F4B6D4B655FDB8F7",
						"toNodeGuid": "FE2E20FD4078C0C75B4F4AADDA1B3FCE",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "FE2E20FD4078C0C75B4F4AADDA1B3FCE",
						"toNodeGuid": "279A293C4340EF9E555A02B238B49683",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					},
					{
						"fromNodeGuid": "BB0E3CCC4009D114C4FA94A76F7EB055",
						"toNodeGuid": "41A103F249432696543985A4A3862C0C",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "61C244BA46BC7EA4F4B6D4B655FDB8F7",
						"toNodeGuid": "2BB2D7C14D2430AC440EC3935E46F746",
						"fromPin": "OutActors",
						"toPin": "Array",
						"dataType": "object",
						"value": "GetAllActorsOfClass()"
					},
					{
						"fromNodeGuid": "2BB2D7C14D2430AC440EC3935E46F746",
						"toNodeGuid": "FE2E20FD4078C0C75B4F4AADDA1B3FCE",
						"fromPin": "Output",
						"toPin": "Object",
						"dataType": "object",
						"value": "circular_ref"
					},
					{
						"fromNodeGuid": "FE2E20FD4078C0C75B4F4AADDA1B3FCE",
						"toNodeGuid": "279A293C4340EF9E555A02B238B49683",
						"fromPin": "AsBP Test 01",
						"toPin": "self",
						"dataType": "object",
						"value": "SomeOtherUsedEvent()"
					},
					{
						"fromNodeGuid": "3121E0834B4B67A695A080976B3BDB8C",
						"toNodeGuid": "15B620E248A4C3EDBFBBEB8C41D290E7",
						"fromPin": "ReturnValue",
						"toPin": "self",
						"dataType": "object",
						"value": "AddToViewport()"
					},
					{
						"fromNodeGuid": "B442E576426BB93B4A2812913C26B24D",
						"toNodeGuid": "BFCD771F4E45A8064E2E1892EE480B19",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "CA59FE5E43FAED0B726C77B87228D250",
						"toNodeGuid": "B442E576426BB93B4A2812913C26B24D",
						"fromPin": "Index",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					},
					{
						"fromNodeGuid": "E7093FB545DBAD220099DF952A9D6B9A",
						"toNodeGuid": "4C7341E741D6D4FC440A8DB30136586D",
						"fromPin": "SomeReadOnlyVariable",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "BB0E3CCC4009D114C4FA94A76F7EB055",
						"toNodeGuid": "C03D6C984CDE3D4F1ED2EF9E28A30FC7",
						"fromPin": "OutputDelegate",
						"toPin": "Delegate",
						"dataType": "delegate",
						"value": "circular_ref"
					},
					{
						"fromNodeGuid": "BB0E3CCC4009D114C4FA94A76F7EB055",
						"toNodeGuid": "EAC385864CB32ABADC2204B1FFB5D191",
						"fromPin": "OutputDelegate",
						"toPin": "Delegate",
						"dataType": "delegate",
						"value": "circular_ref"
					}
				],
				"deadCodeNodes": []
			},
			{
				"name": "UserConstructionScript",
				"type": "FunctionGraph",
				"nodeCount": 1,
				"nodes": [
					{
						"guid": "F7DB9CD34DE7FA19184AACAE93B0C4AA",
						"type": "K2Node_FunctionEntry",
						"title": "Construction Script",
						"executionOrder": 19,
						"isEnabled": true,
						"isEngineEvent": true,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							}
						]
					}
				],
				"entryNodes": [
					"F7DB9CD34DE7FA19184AACAE93B0C4AA"
				],
				"executionEdges": [],
				"dataEdges": [],
				"deadCodeNodes": []
			},
			{
				"name": "myCustomPrint",
				"type": "FunctionGraph",
				"nodeCount": 4,
				"nodes": [
					{
						"guid": "713B1D3B4053F5BAD28DBDB48E80BBAC",
						"type": "K2Node_FunctionEntry",
						"title": "My Custom Print",
						"executionOrder": 20,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"198825094159D4677B9B60BA86AEE01B.execute"
								]
							}
						]
					},
					{
						"guid": "198825094159D4677B9B60BA86AEE01B",
						"type": "K2Node_CallFunction",
						"title": "Print String",
						"executionOrder": 21,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": false,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"semantic":
						{
							"category": "function",
							"operation": "call",
							"conditionExpression": "",
							"variableName": "",
							"functionName": "PrintString",
							"literalValue": "",
							"literalType": "",
							"castFromType": "",
							"castToType": "",
							"isVariableRead": false,
							"loopStartIndex": 0,
							"loopEndIndex": 0,
							"argumentValues": [
								"InString: Conv_IntToString()",
								"bPrintToScreen: true",
								"bPrintToLog: true",
								"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"Duration: 2.000000",
								"Key: ?"
							]
						},
						"pins": [
							{
								"name": "execute",
								"type": "exec",
								"direction": "Input",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"713B1D3B4053F5BAD28DBDB48E80BBAC.then"
								]
							},
							{
								"name": "then",
								"type": "exec",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "InString",
								"type": "string",
								"direction": "Input",
								"default": "Hello",
								"isOrphaned": false,
								"linked": [
									"9233E8174FB4F2848902909A1C83663C.ReturnValue"
								]
							},
							{
								"name": "bPrintToScreen",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "bPrintToLog",
								"type": "bool",
								"direction": "Input",
								"default": "true",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "TextColor",
								"type": "struct",
								"direction": "Input",
								"default": "(R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Duration",
								"type": "real",
								"direction": "Input",
								"default": "2.000000",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "Key",
								"type": "name",
								"direction": "Input",
								"default": "None",
								"isOrphaned": false,
								"linked": []
							}
						]
					},
					{
						"guid": "86FF005C49956A77DC414CBD3ABC0454",
						"type": "K2Node_CallFunction",
						"title": "Random Integer",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "Max",
								"type": "int",
								"direction": "Input",
								"default": "777",
								"isOrphaned": false,
								"linked": []
							},
							{
								"name": "ReturnValue",
								"type": "int",
								"direction": "Output",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"9233E8174FB4F2848902909A1C83663C.InInt"
								]
							}
						]
					},
					{
						"guid": "9233E8174FB4F2848902909A1C83663C",
						"type": "K2Node_CallFunction",
						"title": "To String (Integer)",
						"executionOrder": -1,
						"isEnabled": true,
						"isEngineEvent": false,
						"isPure": true,
						"hasCompilerError": false,
						"isInterfaceCall": false,
						"pins": [
							{
								"name": "InInt",
								"type": "int",
								"direction": "Input",
								"default": "0",
								"isOrphaned": false,
								"linked": [
									"86FF005C49956A77DC414CBD3ABC0454.ReturnValue"
								]
							},
							{
								"name": "ReturnValue",
								"type": "string",
								"direction": "Output",
								"default": "",
								"isOrphaned": false,
								"linked": [
									"198825094159D4677B9B60BA86AEE01B.InString"
								]
							}
						]
					}
				],
				"entryNodes": [
					"713B1D3B4053F5BAD28DBDB48E80BBAC"
				],
				"executionEdges": [
					{
						"fromNodeGuid": "713B1D3B4053F5BAD28DBDB48E80BBAC",
						"toNodeGuid": "198825094159D4677B9B60BA86AEE01B",
						"fromPin": "then",
						"toPin": "execute",
						"edgeType": "sequence"
					}
				],
				"dataEdges": [
					{
						"fromNodeGuid": "9233E8174FB4F2848902909A1C83663C",
						"toNodeGuid": "198825094159D4677B9B60BA86AEE01B",
						"fromPin": "ReturnValue",
						"toPin": "InString",
						"dataType": "string",
						"value": "PrintString()"
					},
					{
						"fromNodeGuid": "86FF005C49956A77DC414CBD3ABC0454",
						"toNodeGuid": "9233E8174FB4F2848902909A1C83663C",
						"fromPin": "ReturnValue",
						"toPin": "InInt",
						"dataType": "int",
						"value": "Conv_IntToString()"
					}
				],
				"deadCodeNodes": []
			}
		],
		"interfaces": [],
		"interfaceCalls": [],
		"dispatchers": [
			{
				"name": "someUnusedDispatcher",
				"signature": "",
				"bindings": [],
				"calls": []
			},
			{
				"name": "someUsedDispatcher",
				"signature": "",
				"bindings": [],
				"calls": [
					{
						"nodeGuid": "858AA82844FDC75063706DACA31B8BA0",
						"graphName": "EventGraph"
					},
					{
						"nodeGuid": "858AA82844FDC75063706DACA31B8BA0",
						"graphName": "EventGraph"
					}
				]
			},
			{
				"name": "somePartlyUsedDispatcher",
				"signature": "",
				"bindings": [],
				"calls": []
			},
			{
				"name": "someOnFireDispatcher",
				"signature": "",
				"bindings": [
					{
						"nodeGuid": "C03D6C984CDE3D4F1ED2EF9E28A30FC7",
						"graphName": "EventGraph",
						"bindingType": "Add"
					},
					{
						"nodeGuid": "EAC385864CB32ABADC2204B1FFB5D191",
						"graphName": "EventGraph",
						"bindingType": "Remove"
					},
					{
						"nodeGuid": "C03D6C984CDE3D4F1ED2EF9E28A30FC7",
						"graphName": "EventGraph",
						"bindingType": "Add"
					},
					{
						"nodeGuid": "EAC385864CB32ABADC2204B1FFB5D191",
						"graphName": "EventGraph",
						"bindingType": "Remove"
					}
				],
				"calls": []
			}
		],
		"executionEdges": [
			{
				"fromNodeGuid": "1BCEF949482586B28665D3B5F1B20A1A",
				"toNodeGuid": "858AA82844FDC75063706DACA31B8BA0",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "858AA82844FDC75063706DACA31B8BA0",
				"toNodeGuid": "6587EF444D0FB5D629B7789DBD74732F",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "6587EF444D0FB5D629B7789DBD74732F",
				"toNodeGuid": "4C7341E741D6D4FC440A8DB30136586D",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "branch_true"
			},
			{
				"fromNodeGuid": "4C7341E741D6D4FC440A8DB30136586D",
				"toNodeGuid": "C03D6C984CDE3D4F1ED2EF9E28A30FC7",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "C03D6C984CDE3D4F1ED2EF9E28A30FC7",
				"toNodeGuid": "C6ED1CCB428A983BF443F9BEAECF5089",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "C6ED1CCB428A983BF443F9BEAECF5089",
				"toNodeGuid": "EAC385864CB32ABADC2204B1FFB5D191",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "9749906E4973A78774F71CBDE9259A93",
				"toNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
				"toNodeGuid": "CA59FE5E43FAED0B726C77B87228D250",
				"fromPin": "then_3",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "CA59FE5E43FAED0B726C77B87228D250",
				"toNodeGuid": "BFCD771F4E45A8064E2E1892EE480B19",
				"fromPin": "LoopBody",
				"toPin": "execute",
				"edgeType": "loop_body"
			},
			{
				"fromNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
				"toNodeGuid": "C6151D3F4A279F1FD11E7B95726C66AE",
				"fromPin": "then_2",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
				"toNodeGuid": "3121E0834B4B67A695A080976B3BDB8C",
				"fromPin": "then_1",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "3121E0834B4B67A695A080976B3BDB8C",
				"toNodeGuid": "15B620E248A4C3EDBFBBEB8C41D290E7",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "5BB98D764B0834735BB031916EAC1A1F",
				"toNodeGuid": "61C244BA46BC7EA4F4B6D4B655FDB8F7",
				"fromPin": "then_0",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "61C244BA46BC7EA4F4B6D4B655FDB8F7",
				"toNodeGuid": "FE2E20FD4078C0C75B4F4AADDA1B3FCE",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "FE2E20FD4078C0C75B4F4AADDA1B3FCE",
				"toNodeGuid": "279A293C4340EF9E555A02B238B49683",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "BB0E3CCC4009D114C4FA94A76F7EB055",
				"toNodeGuid": "41A103F249432696543985A4A3862C0C",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			},
			{
				"fromNodeGuid": "713B1D3B4053F5BAD28DBDB48E80BBAC",
				"toNodeGuid": "198825094159D4677B9B60BA86AEE01B",
				"fromPin": "then",
				"toPin": "execute",
				"edgeType": "sequence"
			}
		],
		"dataEdges": [
			{
				"fromNodeGuid": "61C244BA46BC7EA4F4B6D4B655FDB8F7",
				"toNodeGuid": "2BB2D7C14D2430AC440EC3935E46F746",
				"fromPin": "OutActors",
				"toPin": "Array",
				"dataType": "object",
				"value": "GetAllActorsOfClass()"
			},
			{
				"fromNodeGuid": "2BB2D7C14D2430AC440EC3935E46F746",
				"toNodeGuid": "FE2E20FD4078C0C75B4F4AADDA1B3FCE",
				"fromPin": "Output",
				"toPin": "Object",
				"dataType": "object",
				"value": "circular_ref"
			},
			{
				"fromNodeGuid": "FE2E20FD4078C0C75B4F4AADDA1B3FCE",
				"toNodeGuid": "279A293C4340EF9E555A02B238B49683",
				"fromPin": "AsBP Test 01",
				"toPin": "self",
				"dataType": "object",
				"value": "SomeOtherUsedEvent()"
			},
			{
				"fromNodeGuid": "3121E0834B4B67A695A080976B3BDB8C",
				"toNodeGuid": "15B620E248A4C3EDBFBBEB8C41D290E7",
				"fromPin": "ReturnValue",
				"toPin": "self",
				"dataType": "object",
				"value": "AddToViewport()"
			},
			{
				"fromNodeGuid": "B442E576426BB93B4A2812913C26B24D",
				"toNodeGuid": "BFCD771F4E45A8064E2E1892EE480B19",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "CA59FE5E43FAED0B726C77B87228D250",
				"toNodeGuid": "B442E576426BB93B4A2812913C26B24D",
				"fromPin": "Index",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			},
			{
				"fromNodeGuid": "E7093FB545DBAD220099DF952A9D6B9A",
				"toNodeGuid": "4C7341E741D6D4FC440A8DB30136586D",
				"fromPin": "SomeReadOnlyVariable",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "BB0E3CCC4009D114C4FA94A76F7EB055",
				"toNodeGuid": "C03D6C984CDE3D4F1ED2EF9E28A30FC7",
				"fromPin": "OutputDelegate",
				"toPin": "Delegate",
				"dataType": "delegate",
				"value": "circular_ref"
			},
			{
				"fromNodeGuid": "BB0E3CCC4009D114C4FA94A76F7EB055",
				"toNodeGuid": "EAC385864CB32ABADC2204B1FFB5D191",
				"fromPin": "OutputDelegate",
				"toPin": "Delegate",
				"dataType": "delegate",
				"value": "circular_ref"
			},
			{
				"fromNodeGuid": "9233E8174FB4F2848902909A1C83663C",
				"toNodeGuid": "198825094159D4677B9B60BA86AEE01B",
				"fromPin": "ReturnValue",
				"toPin": "InString",
				"dataType": "string",
				"value": "PrintString()"
			},
			{
				"fromNodeGuid": "86FF005C49956A77DC414CBD3ABC0454",
				"toNodeGuid": "9233E8174FB4F2848902909A1C83663C",
				"fromPin": "ReturnValue",
				"toPin": "InInt",
				"dataType": "int",
				"value": "Conv_IntToString()"
			}
		],
		"variableUsages": [
			{
				"nodeGuid": "E7093FB545DBAD220099DF952A9D6B9A",
				"graphName": "EventGraph",
				"variableName": "SomeReadOnlyVariable",
				"isRead": true,
				"value": "",
				"executionOrder": 0
			}
		],
		"functionCalls": [
			{
				"nodeGuid": "61C244BA46BC7EA4F4B6D4B655FDB8F7",
				"graphName": "EventGraph",
				"functionName": "GetAllActorsOfClass",
				"returnValue": "used",
				"executionOrder": 14,
				"arguments": [
					"ActorClass: ?"
				]
			},
			{
				"nodeGuid": "279A293C4340EF9E555A02B238B49683",
				"graphName": "EventGraph",
				"functionName": "SomeOtherUsedEvent",
				"returnValue": "",
				"executionOrder": 16,
				"arguments": [
					"self: SomeOtherUsedEvent()"
				]
			},
			{
				"nodeGuid": "15B620E248A4C3EDBFBBEB8C41D290E7",
				"graphName": "EventGraph",
				"functionName": "AddToViewport",
				"returnValue": "",
				"executionOrder": 13,
				"arguments": [
					"self: AddToViewport()",
					"ZOrder: 0"
				]
			},
			{
				"nodeGuid": "C6151D3F4A279F1FD11E7B95726C66AE",
				"graphName": "EventGraph",
				"functionName": "SetTimer",
				"returnValue": "unused",
				"executionOrder": 11,
				"arguments": [
					"Object: ?",
					"FunctionName: myCustomPrint",
					"Time: 0.010000",
					"bLooping: true",
					"InitialStartDelay: 0.000000",
					"InitialStartDelayVariance: 0.000000"
				]
			},
			{
				"nodeGuid": "C6151D3F4A279F1FD11E7B95726C66AE",
				"graphName": "EventGraph",
				"functionName": "myCustomPrint",
				"returnValue": "implicit",
				"executionOrder": 11,
				"arguments": []
			},
			{
				"nodeGuid": "BFCD771F4E45A8064E2E1892EE480B19",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 10,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "B442E576426BB93B4A2812913C26B24D",
				"graphName": "EventGraph",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: Conv_IntToString()"
				]
			},
			{
				"nodeGuid": "4C7341E741D6D4FC440A8DB30136586D",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 3,
				"arguments": [
					"InString: SomeReadOnlyVariable",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "41A103F249432696543985A4A3862C0C",
				"graphName": "EventGraph",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 18,
				"arguments": [
					"InString: Hello",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "C6ED1CCB428A983BF443F9BEAECF5089",
				"graphName": "EventGraph",
				"functionName": "Delay",
				"returnValue": "",
				"executionOrder": 5,
				"arguments": [
					"Duration: 10.000000"
				]
			},
			{
				"nodeGuid": "198825094159D4677B9B60BA86AEE01B",
				"graphName": "myCustomPrint",
				"functionName": "PrintString",
				"returnValue": "",
				"executionOrder": 21,
				"arguments": [
					"InString: Conv_IntToString()",
					"bPrintToScreen: true",
					"bPrintToLog: true",
					"TextColor: (R=0.000000,G=0.660000,B=1.000000,A=1.000000)",
					"Duration: 2.000000",
					"Key: ?"
				]
			},
			{
				"nodeGuid": "86FF005C49956A77DC414CBD3ABC0454",
				"graphName": "myCustomPrint",
				"functionName": "RandomInteger",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"Max: 777"
				]
			},
			{
				"nodeGuid": "9233E8174FB4F2848902909A1C83663C",
				"graphName": "myCustomPrint",
				"functionName": "Conv_IntToString",
				"returnValue": "used",
				"executionOrder": 0,
				"arguments": [
					"InInt: RandomInteger()"
				]
			}
		],
		"referencedBlueprints": [
			{
				"blueprintPath": "/Game/BP/BP_Test_01.BP_Test_01",
				"blueprintName": "BP_Test_01",
				"functionName": "SomeOtherUsedEvent",
				"sourceNodeGuid": "279A293C4340EF9E555A02B238B49683",
				"sourceGraphName": "EventGraph"
			}
		],
		"diagnostics": [],
		"deadCodeNodes": [],
		"totalExecutionPaths": 17,
		"maxExecutionDepth": 6
	},
	"issues": [
		{
			"level": "error",
			"type": "Performance",
			"desc": "Heavy op(s) on Tick path in 'EventGraph': Get All Actors Of Class",
			"rule_id": "BP-PERF-001"
		},
		{
			"level": "warning",
			"type": "Unhandled Cast",
			"desc": "Cast in 'EventGraph' has no CastFailed handler.",
			"rule_id": "BP-CAST-001"
		},
		{
			"level": "info",
			"type": "Read-only Variable",
			"desc": "Variable 'SomeReadOnlyVariable' is read but never assigned. Always returns its default value.",
			"rule_id": "BP-VAR-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Asset 'test_02' should start with 'BP_'.",
			"rule_id": "BP-NAMING-001"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Function 'myCustomPrint' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-002"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Function 'someOnFireDispatcher_Event' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-002"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'someUnusedDispatcher' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'someUsedDispatcher' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'somePartlyUsedDispatcher' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Naming",
			"desc": "Variable 'someOnFireDispatcher' does not follow PascalCase convention.",
			"rule_id": "BP-NAMING-003"
		},
		{
			"level": "warning",
			"type": "Event Naming",
			"desc": "Event 'someOnFireDispatcher_Event' does not start with an uppercase letter.",
			"rule_id": "BP-NAMING-009"
		},
		{
			"level": "error",
			"type": "Broken Node",
			"desc": "'EventGraph' / 'Cast To BP_Test_01': 'Item' is already a 'BP Test 01', you don't need  Cast To BP_Test_01 .",
			"rule_id": "BP-ERR-001"
		},
		{
			"level": "error",
			"type": "Loop on Tick",
			"desc": "Loop node(s) on Tick path in 'EventGraph': For Loop",
			"rule_id": "BP-PERF-002"
		},
		{
			"level": "warning",
			"type": "Cast on Tick",
			"desc": "Dynamic cast(s) on Tick path in 'EventGraph': Cast To BP_Test_01",
			"rule_id": "BP-PERF-003"
		},
		{
			"level": "error",
			"type": "Set Timer on Tick",
			"desc": "Set Timer called on Tick path in 'EventGraph' — creates a new timer every frame: Set Timer by Function Name",
			"rule_id": "BP-PERF-004"
		},
		{
			"level": "error",
			"type": "Create Widget on Tick",
			"desc": "Create Widget called on Tick path in 'EventGraph' — allocates a new widget every frame: Create Widget",
			"rule_id": "BP-PERF-005"
		},
		{
			"level": "info",
			"type": "Print String on Tick",
			"desc": "Print String on Tick path in 'EventGraph' — debug output every frame: Print String",
			"rule_id": "BP-PERF-006"
		},
		{
			"level": "error",
			"type": "Branch Literal",
			"desc": "Branch in 'EventGraph' has hardcoded 'true' condition — one path is never taken.",
			"rule_id": "BP-FLOW-001"
		},
		{
			"level": "warning",
			"type": "Unused Function",
			"desc": "Function 'someOnFireDispatcher_Event' is never called.",
			"rule_id": "BP-UNUSED-FN-001"
		},
		{
			"level": "info",
			"type": "Unused Dispatcher",
			"desc": "Dispatcher 'someUnusedDispatcher' is declared but never called or bound anywhere in the project.",
			"rule_id": "BP-DISP-003"
		},
		{
			"level": "info",
			"type": "Dispatcher Not Bound",
			"desc": "Dispatcher 'somePartlyUsedDispatcher' is called but has no bindings anywhere in the project — call may go nowhere.",
			"rule_id": "BP-DISP-001"
		}
	]
};})();